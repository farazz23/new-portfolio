from fastapi import APIRouter, Depends, HTTPException, status
from ..schemas.message_schema import MessageResponse, MessageCreate
from ..db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from ..services.message_service import (
    create_message,
    get_message,
    get_one_message,
    delete_message,
)

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


@router.get("/{id}", response_model=MessageResponse)
async def get_one_msg(id: int, db: AsyncSession = Depends(get_db)):
    return await get_one_message(db, id)


@router.delete("/{id}", response_model=MessageResponse)
async def delete_msg(id: int, db: AsyncSession = Depends(get_db)):
    message = await delete_message(db, id)

    if not message:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Message not found"
        )

    return message
