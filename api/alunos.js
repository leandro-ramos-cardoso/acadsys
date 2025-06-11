export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            res.status(200).json({ message: 'GET recebido' });
            break;
        case 'POST':
            res.status(201).json({ message: 'POST recebido' });
            break;
        case 'PUT':
            res.status(200).json({ message: 'PUT recebido' });
            break;
        case 'PATCH':
            res.status(200).json({ message: 'PATCH recebido' });
            break;
        case 'DELETE':
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
            res.status(405).end(`Método ${method} não permitido`);
    }
}
