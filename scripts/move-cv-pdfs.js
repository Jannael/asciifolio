import { readdir, cp } from 'node:fs/promises'
import { join } from 'node:path'

const distDir = './dist'
const pdfFiles = []

// Find all CV-[lang].pdf files in dist/[lang]/cv/ directories
const langDirs = await readdir(distDir, { withFileTypes: true })
for (const dir of langDirs) {
  if (dir.isDirectory()) {
    const cvDir = join(distDir, dir.name, 'cv')
    try {
      const files = await readdir(cvDir)
      for (const file of files) {
        if (file.match(/^CV-.*\.pdf$/)) {
          pdfFiles.push({
            src: join(cvDir, file),
            dest: join(distDir, file),
          })
        }
      }
    } catch {
      // cv directory doesn't exist or other error
    }
  }
}

// Copy PDF files to dist root
for (const { src, dest } of pdfFiles) {
  await cp(src, dest, { force: true })
  console.log(`Moved: ${src} -> ${dest}`)
}

if (pdfFiles.length === 0) {
  console.log('No CV PDF files found to move')
}
