import uvicorn
import time
from typing import Dict, Any
from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from .core.config import setting
from .routers import message_router
from .db.database import create_table


@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_table()
    print(f"Starting the Backend at {time.strftime('%Y-%m-%d %H:%M:%S')}")
    yield
    print(f"Closing the Backend at {time.strftime('%Y-%m-%d %H:%M:%S')}")


app = FastAPI(
    title="Protfolio Endpoints",
    description="Handling the client response",
    version="1.0",
    debug=setting.APP_DEBUG,
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[setting.PRODUCTION_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(message_router.router)


@app.get("/")
async def root() -> Dict[str, Any]:
    return {"message": "Successfully running the server", "status": 200}


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
