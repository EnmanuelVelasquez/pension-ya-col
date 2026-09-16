import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, FileText, Landmark, ShieldCheck } from "lucide-react";
import { AppShell, downloadReceipt } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Inicio | Pensión Global" },
    { name: "description", content: "Consulta tu planilla y revisa tus recibos de pensión en Colombia." },
    { property: "og:title", content: "Inicio | Pensión Global" },
    { property: "og:description", content: "Consulta tu planilla y revisa tus recibos de pensión en Colombia." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const receipts = [
  { month: "Agosto", year: "2026", value: "$350.000", reference: "PG-2026-08-1842" },
  { month: "Julio", year: "2026", value: "$350.000", reference: "PG-2026-07-1139" },
  { month: "Junio", year: "2026", value: "$330.000", reference: "PG-2026-06-0874" },
];

function Index() {
  return (
    <AppShell>
      <section className="mb-7">
        <p className="mb-1 text-sm font-semibold text-muted-foreground">Miércoles, 16 de septiembre</p>
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">Hola, Enmanuel</h1>
        <p className="mt-1 text-sm text-muted-foreground">Tu aporte pensional está listo para pagar.</p>
      </section>

      <section className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="bg-primary px-5 py-6 text-primary-foreground sm:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-warning-soft px-3 py-1.5 text-xs font-bold text-warning">
              <span className="size-2 rounded-full bg-warning" /> Pendiente
            </span>
            <CalendarDays className="size-5 opacity-80" />
          </div>
          <p className="text-sm font-medium opacity-80">Planilla de septiembre 2026</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">$370.000 COP</h2>
          <div className="mt-5 flex items-center gap-2 border-t border-primary-foreground/20 pt-4 text-sm">
            <Landmark className="size-4" /> Fondo: Colpensiones
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <Button asChild variant="action" size="xl" className="w-full sm:w-auto">
            <Link to="/pago">Pagar mes actual <ArrowRight /></Link>
          </Button>
          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" />
            El total incluye tu aporte PILA y la comisión del servicio.
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div><p className="text-xs font-bold uppercase text-muted-foreground">Tus documentos</p><h2 className="mt-1 text-xl font-extrabold">Historial de recibos</h2></div>
          <span className="text-xs font-semibold text-muted-foreground">3 recibos</span>
        </div>
        <div className="divide-y divide-border rounded-lg border border-border bg-card">
          {receipts.map((receipt) => (
            <div key={receipt.reference} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-4 sm:gap-5 sm:px-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><FileText className="size-5" /></span>
              <div className="min-w-0"><p className="truncate text-sm font-bold">{receipt.month} {receipt.year}</p><p className="mt-0.5 text-xs text-muted-foreground">Pagado · {receipt.value}</p></div>
              <Button variant="quiet" size="square" aria-label={`Descargar recibo de ${receipt.month}`} onClick={() => downloadReceipt(receipt.reference)}><Download /></Button>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
