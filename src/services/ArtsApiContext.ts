const BaseURL: string | undefined = process.env.REACT_APP_BASE_URL

export async function getImages(): Promise<any> {
  const result = await fetch(`${BaseURL}/posts`, {
    method: "GET",
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function createAccount(userData: any): Promise<any> {
  const result = await fetch(`${BaseURL}/auth/signup`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(userData)
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function signin(userData: any): Promise<any> {
  const result = await fetch(`${BaseURL}/auth/signin`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(userData)
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function oldGetImages(): Promise<any> {
  const result = await fetch(`${BaseURL}/photos`, {
    method: "GET",
    headers: new Headers({
      'Authorization': `Bearer ADASDASDasd`
    })
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}
