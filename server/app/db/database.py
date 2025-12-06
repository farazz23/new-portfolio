from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.asyncio import async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from ..core.config import setting
from typing import AsyncGenerator


BASE_URL = setting.DATABASE_URL
BASE_2_URL = setting.LOCAL_URL
ENV_VAR = setting.APP_ENV
if ENV_VAR == "production":
    engine = create_async_engine(BASE_URL, echo=setting.DB_ECHO)
else:
    engine = create_async_engine(BASE_2_URL, echo=setting.DB_ECHO)


Async_SessionLocal = async_sessionmaker(
    bind=engine, expire_on_commit=False, class_=AsyncSession
)

Base = declarative_base()


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
