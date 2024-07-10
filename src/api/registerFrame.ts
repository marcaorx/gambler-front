export async function getRegisterFrame(): Promise<any> {
  const resp = await fetch(`http://localhost:3020/`);

  if (!resp.ok) {
    throw new Error("Network response was not ok");
  }

  return resp.text();
}
