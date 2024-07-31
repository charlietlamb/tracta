export default function TractaClauseText({ text }: { text: string }) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />
}
