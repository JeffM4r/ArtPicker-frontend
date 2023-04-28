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

export async function sendPost(postData: any,): Promise<any> {
  const result = await fetch(`${BaseURL}/posts`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${postData.token}`
    }),
    body: JSON.stringify({title:postData.title,
                          subtitle:postData.subtitle,
                          image:postData.image})
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function getAccessToken({queryKey}: any): Promise<any> {
  const result = await fetch(`${BaseURL}/auth/token`, {
    method: "POST",
    headers: new Headers({
      "Authorization": `Bearer ${queryKey[0]}`
    }),
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.text();
}

export async function getUser(token: any): Promise<any> {
  const result = await fetch(`${BaseURL}/auth/user`, {
    method: "GET",
    headers: new Headers({
      'Authorization': `Bearer ${token}`
    })
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function getPost({queryKey}: any): Promise<any> {
  const result = await fetch(`${BaseURL}/posts/${queryKey[0]}`, {
    method: "GET",
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}
