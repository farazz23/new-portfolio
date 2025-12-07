from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

# 1. Instantiate the configuration dictionary
config_dict = SettingsConfigDict(
    env_file=".env",
    extra="ignore",  # Added this setting for robustness
    case_sensitive=True,  # Good practice for environment variables
)


class Setting(BaseSettings):
    # 2. Replace the inner Config class with model_config attribute
    model_config = config_dict

    # App
    # App
    APP_ENV: str = "production"
    APP_DEBUG: bool = False
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000

    # Database
    # FIX: Add default values for optional fields
    LOCAL_URL: str = ""  # Default to None
    DATABASE_URL: str = ""  # Consider adding a default or making optional

    LOCAL_FRONTEND_URL: Optional[str] = None  # Default to None
    FRONTEND_URL: str = ""  # Consider adding a default or making optional

    # Pooling / performance tuning
    DB_POOL_SIZE: int = 10
    DB_MAX_OVERFLOW: int = 20
    DB_POOL_TIMEOUT: int = 30
    DB_ECHO: bool = False
    DB_FUTURE: bool = True

    # Other
    LOG_LEVEL: str = "info"


setting = Setting()
