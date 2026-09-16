import { Container, Button, ButtonLink, Card, SectionTitle } from './components/ui';

/**
 * Vidriera temporal del sistema de diseño (Etapa 1). Se reemplaza en
 * la Etapa 2 (layout) y Etapa 4 (secciones reales) por el contenido
 * definitivo de la landing.
 */
function App() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          kicker="Etapa 1"
          title="Sistema de diseño"
          description="Paleta, tipografía y componentes base listos. El contenido real de cada sección llega en las próximas etapas."
        />

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="primary">Botón primario</Button>
          <Button variant="secondary">Botón secundario</Button>
          <Button variant="ghost">Botón ghost</Button>
          <ButtonLink href="https://wa.me/" variant="primary">
            Consultar por WhatsApp
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="font-heading text-lg font-semibold text-ink">
              Card estándar
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Borde fino, sin sombra. Así se ven categorías de producto
              o servicios en la Etapa 4.
            </p>
          </Card>
          <Card accent>
            <h3 className="font-heading text-lg font-semibold text-ink">
              Card destacada
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Con borde de acento a la izquierda — para un producto
              destacado o el servicio más pedido.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}

export default App;
