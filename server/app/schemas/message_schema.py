from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class MessageCreate(BaseModel):
    username: Optional[str] = "anonymous"
    message: str


class MessageResponse(BaseModel):
    id: int
    username: str
    message: str
    created_at: datetime

    model_config = {"from_attributes": True}


class MessageDelete(BaseModel):
    id: str
