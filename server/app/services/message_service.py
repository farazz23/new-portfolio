from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from ..schemas.message_schema import MessageCreate
from ..models.message_model import Message_model


async def create_message(db: AsyncSession, message: MessageCreate) -> Message_model:
    username = (message.username or "").strip() or None

    db_message = Message_model(username=username, message=message.message)

    db.add(db_message)
    await db.commit()
    await db.refresh(db_message)
    return db_message


async def get_message(db: AsyncSession):
    result = await db.execute(
        select(Message_model).order_by(Message_model.created_at.desc())
    )

    messages = result.scalars().all()
    return messages
