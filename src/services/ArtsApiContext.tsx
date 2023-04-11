const BaseURL: string | undefined = process.env.REACT_APP_BASE_URL

export async function getImages(): Promise<any> {
  const result = await fetch(`${BaseURL}/photos`, {
    method: "GET",
    headers: new Headers({
      'Authorization': `Client-ID ${process.env.REACT_APP_SECRET_KEY}`
    })
  });

  if (result.status > 399){
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function getPeople(): Promise<any> {
  const result = await fetch("https://swapi.dev/api/people/1", {
    method: "GET"
  });

  if (result.status > 399){
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}