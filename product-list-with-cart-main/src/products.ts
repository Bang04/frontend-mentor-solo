export async function fetchProducts() {
  const res = await fetch('/data.json')
  if (!res.ok) throw new Error('fail');
  console.log(res);
  return res.json();
}
