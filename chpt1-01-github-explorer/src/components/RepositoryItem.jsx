export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'Default'}</strong>
      <p>{repository.description ?? 'Default Description'}</p>

      <a href={repository.url ?? 'https://google.com'}>Acessar repositório</a>
    </li>
  );
} 