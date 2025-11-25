from fastapi import APIRouter, Depends
from ..schemas.message_schema import MessageResponse, MessageCreate
from ..db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from ..services.message_service import create_message, get_message

# from typing import List


router = APIRouter(prefix="/api/message", tags=["Messages"])


@router.post("/", response_model=MessageResponse)
async def create_msg(message: MessageCreate, db: AsyncSession = Depends(get_db)):
    """Receive a message from frontend and save to DB"""
    return await create_message(db, message)


@router.get("/", response_model=list[MessageResponse])
async def read_msg(db: AsyncSession = Depends(get_db)):
    """Fetch all messages from DB"""
    return await get_message(db)
