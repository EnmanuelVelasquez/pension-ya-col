import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Download, Home, ShieldCheck } from "lucide-react";
import { AppShell, downloadReceipt } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/exito")({
  head: () => ({ meta: [
    { title: "Pago exitoso | Pensión Global" },
    { name: "description", content: "Confirmación y soporte de tu pago pensional." },
    { property: "og:title", content: "Pago exitoso | Pensión Global" },
    { property: "og:description", content: "Confirmación y soporte de tu pago pensional." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SuccessPage,
});

function SuccessPage() {
  const reference = "PG-2026-09-240817";
  return (
    <AppShell compact>
      <section className="py-4 text-center sm:py-8">
        <div className="mx-auto grid size-24 place-items-center rounded-full bg-success-soft text-success"><Check className="size-12" strokeWidth={3} /></div>
        <p className="mt-7 text-xs font-extrabold uppercase text-success">Transacción exitosa</p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">¡Tu aporte quedó pagado!</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">Procesamos tu planilla de septiembre de 2026. Guarda el soporte para tus registros.</p>

        <div className="mt-8 rounded-lg border border-border bg-card p-5 text-left sm:p-6">
          <div className="flex items-center gap-3 border-b border-border pb-4"><ShieldCheck className="size-6 text-success" /><div><p className="text-xs text-muted-foreground">Estado</p><p className="text-sm font-extrabold text-success">Pago aprobado</p></div></div>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Referencia</dt><dd className="font-bold">{reference}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Fondo</dt><dd className="font-bold">Colpensiones</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Total pagado</dt><dd className="font-extrabold">$370.000 COP</dd></div>
          </dl>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button variant="action" size="xl" onClick={() => downloadReceipt(reference)}><Download /> Descargar soporte en PDF</Button>
          <Button asChild variant="outline" size="xl"><Link to="/"><Home /> Volver al inicio</Link></Button>
        </div>
      </section>
    </AppShell>
  );
}