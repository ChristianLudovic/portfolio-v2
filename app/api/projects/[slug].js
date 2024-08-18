import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { slug } = req.query

  try {
    const filePath = path.join(process.cwd(), 'data/projects', `${slug}.json`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const articleData = JSON.parse(fileContents)

    res.status(200).json(articleData)
  } catch (error) {
    res.status(404).json({ message: "Article non trouvé" })
  }
}