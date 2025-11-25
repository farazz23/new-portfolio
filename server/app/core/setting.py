from pydantic_settings import BaseSettings
from typing import List
from pydantic import field_validator


class Setting(BaseSettings):
    DATABASE_URL: str
    DATABASE_NAME: str

    API_PREFIX: str = "/api"
    DEBUG: bool = True
    APP_ENV: str = "development"

    ALLOWED_ORIGINS: List[str] = ["localhost", "127.0.0.1"]

    @field_validator("ALLOWED_ORIGINS")
    def parse_allowed_origins(cls, value: str) -> List[str]:
        return value.split(",") if value else []

    class Config:
        env_file = (".env",)
        env_encoding = ("utf-8",)
        case_sensetive = True


setting = Setting()  # type: ignore
