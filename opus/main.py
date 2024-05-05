import os
from dotenv import load_dotenv
from anthropic import Anthropic


load_dotenv()

KEY = os.getenv('API_KEY_ANTHROPIC')

client = Anthropic(api_key=KEY)

if __name__ == '__main__':
    # Two prompts in main: input prompt and system prompt
    system_prompt =None
