from ..db.database import Base
from sqlalchemy import Column, Integer, String, DateTime, func


class Message_model(Base):
    __tablename__ = "message_box"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=True)
    message = Column(
        String(500),
        nullable=False,
    )
    created_at = Column(DateTime(timezone=True), server_default=func.now())
