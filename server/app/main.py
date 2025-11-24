from fastapi import FastAPI
from contextlib import asynccontextmanager
import time
import uvicorn


@asynccontextmanager
async def lifespan(app: FastAPI):

    print(
        f"====================Starting the app at {time.strftime('%Y-%m-%d %H:%M:%S')}===================="
    )
    yield
    print(
        f"====================Shutting down at {time.strftime('%Y-%m-%d %H:%M:%S')}===================="
    )


app = FastAPI(
    title="Portfolio_backend",
    description="Handling the client response",
    version="1.0",
    debug=True,
    lifespan=lifespan,
)


@app.get("/")
def root():
    return {"message": "Successfully running"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
