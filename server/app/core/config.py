from pydantic_settings import BaseSettings, SettingsConfigDict

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
    APP_ENV: str = "development"
    APP_DEBUG: bool = False
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000

    # Database (These are required to be in .env or OS environment)
    DATABASE_URL: str
    FRONTEND_URL: str

    # Pooling / performance tuning
    DB_POOL_SIZE: int = 10
    DB_MAX_OVERFLOW: int = 20
    DB_POOL_TIMEOUT: int = 30
    DB_ECHO: bool = False

    # Gunicorn
    GUNICORN_WORKERS: int = 2
    GUNICORN_THREADS: int = 1

    # Other
    LOG_LEVEL: str = "info"


setting = Setting()
