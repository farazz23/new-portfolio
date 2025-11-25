import uvicorn
import time
from fastapi import FastAPI
from contextlib import asynccontextmanager
from typing import Dict, Any


@asynccontextmanager
async def lifespan(app: FastAPI):
    print(f"Starting the Backend at {time.strftime('%Y-%m-%d %H:%M:%S')}")
    yield
    print(f"Closing the Backend at {time.strftime('%Y-%m-%d %H:%M:%S')}")


app = FastAPI(
    title="Portfolio Backend",
    description="Handling the Client Request",
    version="1.0",
    debug=True,
    lifespan=lifespan,
)


@app.get("/")
async def root() -> Dict[str, Any]:

    return {"message": "Successfully Rendring.....", "status": 200}


if __name__ == "__main__":

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
