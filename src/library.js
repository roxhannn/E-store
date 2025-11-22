// 📁 library.js
async function categoryapi() {
  const api = await fetch("https://dummyjson.com/products/categories")
  const data = await api.json()
  return data.slice(6)
}

async function productapi(category) {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products?limit=10"
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const getProduct = async (prod = null) => {
  let API2 = 'https://dummyjson.com/products'

  if (prod != null) {
    const response = await fetch(`${API2}/${prod}`)
    const data = await response.json()
    return data;

  }
}
export { categoryapi, productapi, getProduct }
