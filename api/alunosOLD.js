// pages/api/alunos.js

import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'db.json')

export default function handler(req, res) {
    if (req.method === 'GET') {
        const fileData = fs.readFileSync(dbPath, 'utf-8')
        const alunos = JSON.parse(fileData)
        return res.status(200).json(alunos)
    }

    if (req.method === 'POST') {
        const novoAluno = req.body

        const fileData = fs.readFileSync(dbPath, 'utf-8')
        const alunos = JSON.parse(fileData)

        alunos.push(novoAluno)

        fs.writeFileSync(dbPath, JSON.stringify(alunos, null, 2))

        return res.status(201).json({ message: 'Aluno cadastrado', aluno: novoAluno })
    }

    return res.status(405).end()
}
