import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th> Pixels </th>}
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, token]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{token}</td>
              {hasRemValue && (
                <td> {Number(token.replace('rem', '')) * 16}px </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
