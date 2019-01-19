class TokenManager {
  tokens = [localStorage.getItem('token')].filter(x => x != null) as string[];

  get current(): string | undefined {
    return this.tokens[this.tokens.length - 1];
  }

  push = (token: string) => {
    this.tokens.push(token);
    const {current} = this;
    if (current) {
      localStorage.setItem('token', current);
    }
  };

  pop = () => {
    this.tokens.pop();
    const {current} = this;
    if (current) {
      localStorage.setItem('token', current);
    } else {
      localStorage.removeItem('token');
    }
  };
}

export const tokenManager = new TokenManager();