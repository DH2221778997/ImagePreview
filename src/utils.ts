export default function dataToString(file:File) {
  return new Promise<string>((resolve,reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onerror=() => reject(reader.error)
    reader.onload=() => resolve(reader.result as string)
  })
}
