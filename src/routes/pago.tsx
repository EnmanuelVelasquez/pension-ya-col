import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check, CreditCard, Landmark, LockKeyhole, Smartphone } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pago")({
  head: () => ({ meta: [
    { title: "Pagar planilla | Pensión Global" },
    { name: "description", content: "Elige un medio y confirma el pago de tu planilla PILA." },
    { property: "og:title", content: "Pagar planilla | Pensión Global" },
    { property: "og:description", content: "Elige un medio y confirma el pago de tu planilla PILA." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PaymentPage,
});

const methods = [
  { id: "card", label: "Tarjeta de crédito o débito", detail: "Visa, Mastercard y American Express", icon: CreditCard },
  { id: "pse", label: "PSE", detail: "Débito desde tu banco en Colombia", icon: Landmark },
  { id: "apple", label: "Apple Pay", detail: "Pago rápido desde tu dispositivo", icon: Smartphone },
];

function PaymentPage() {
  const [method, setMethod] = useState("card");
  const navigate = useNavigate();
  return (
    <AppShell compact>
      <Link to="/" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="size-4" /> Volver</Link>
      <div className="mb-7"><p className="text-xs font-bold uppercase text-muted-foreground">Septiembre 2026</p><h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">Pagar planilla</h1><p className="mt-2 text-sm text-muted-foreground">Revisa el total y selecciona tu medio de pago.</p></div>

      <section className="rounded-lg border border-border bg-card p-5 sm:p-6">
        <h2 className="text-sm font-extrabold">Resumen del cobro</h2>
        <dl className="mt-5 space-y-4 text-sm">
          <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Aporte PILA · Colpensiones</dt><dd className="font-bold">$350.000</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Comisión por el servicio</dt><dd className="font-bold">$20.000</dd></div>
          <div className="flex justify-between gap-4 border-t border-border pt-4 text-lg"><dt className="font-extrabold">Total a pagar</dt><dd className="font-extrabold text-primary">$370.000 COP</dd></div>
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-sm font-extrabold">¿Cómo quieres pagar?</h2>
        <div className="space-y-3">
          {methods.map(({ id, label, detail, icon: Icon }) => {
            const selected = method === id;
            return (
              <Button key={id} type="button" variant="outline" onClick={() => setMethod(id)} className={`h-auto w-full justify-start whitespace-normal rounded-lg p-4 text-left shadow-none ${selected ? "border-primary bg-navy-soft" : "bg-card"}`}>
                <span className={`grid size-11 shrink-0 place-items-center rounded-lg ${selected ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}><Icon className="size-5" /></span>
                <span className="min-w-0 flex-1"><span className="block text-sm font-extrabold">{label}</span><span className="mt-1 block text-xs font-normal text-muted-foreground">{detail}</span></span>
                <span className={`grid size-5 shrink-0 place-items-center rounded-full border ${selected ? "border-primary bg-primary text-primary-foreground" : "border-input"}`}>{selected && <Check className="size-3" />}</span>
              </Button>
            );
          })}
        </div>
      </section>

      <Button variant="action" size="xl" className="mt-8 w-full" onClick={() => navigate({ to: "/exito" })}>Confirmar pago · $370.000</Button>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><LockKeyhole className="size-4 text-success" /> Pago cifrado y procesado de forma segura</p>
    </AppShell>
  );
}