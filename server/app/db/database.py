from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.asyncio import async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from ..core.config import setting
from typing import AsyncGenerator


def get_db_url() -> str:
    if setting.DATABASE_URL:
        db_url = setting.DATABASE_URL
        if db_url.startswith("postgresql://") and "psycopg" not in db_url:
            db_url = db_url.replace("postgresql://", "postgresql+psycopg://", 1)

        return db_url

    # Defualt
    return setting.LOCAL_URL


DATABASE_URL = get_db_url()

Base = declarative_base()

engine = create_async_engine(
    DATABASE_URL,
    echo=False,
    pool_pre_ping=True,
    pool_recycle=300,
)

Async_SessionLocal = async_sessionmaker(
    bind=engine, expire_on_commit=False, class_=AsyncSession
)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with Async_SessionLocal() as db_session:
        try:
            yield db_session
            await db_session.commit()
        except Exception:
            await db_session.rollback()
            raise
        finally:
            await db_session.close()


async def create_table():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
