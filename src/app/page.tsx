import Button from '../components/ui/Button'

export default async function Home() {
  return (
    <Button variant="ghost" size="lg" isLoading={true}>
      Hello World
    </Button>
  )
}
