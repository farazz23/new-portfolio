from pydantic import BaseModel
from typing import Optional
from datetime import datetime

# , field_validator


class MessageCreate(BaseModel):
    username: Optional[str] = "anonymous"
    message: str

    # @field_validator("username", mode="before")
    # def default_username(cls, v: str | None) -> str | None:
    #     if v is None or v == "":
    #         return "anonymous"
    #     return v


class MessageResponse(BaseModel):
    id: int
    username: str
    message: str
    created_at: datetime

    class Config:
        orm_mode = True
