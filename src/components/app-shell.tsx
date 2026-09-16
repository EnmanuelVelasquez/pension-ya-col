import { Link } from "@tanstack/react-router";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export function Brand() {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label="Pensión Global, inicio">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
        <ShieldCheck className="size-5" strokeWidth={2.5} />
      </span>
      <span className="text-lg font-extrabold text-primary">Pensión Global</span>
    </Link>
  );
}

export function AppShell({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto grid h-18 max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
          <div className="min-w-0"><Brand /></div>
          <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-muted-foreground">
            <LockKeyhole className="size-4 text-success" />
            <span className="hidden sm:inline">Sesión protegida</span>
          </div>
        </div>
      </header>
      <main className={`mx-auto w-full px-5 py-8 sm:px-8 sm:py-12 ${compact ? "max-w-2xl" : "max-w-5xl"}`}>
        {children}
      </main>
    </div>
  );
}

export function downloadReceipt(reference: string) {
  const content = `PENSIÓN GLOBAL\nSoporte de pago\n\nReferencia: ${reference}\nPeriodo: Septiembre 2026\nFondo: Colpensiones\nAporte PILA: $350.000\nComisión del servicio: $20.000\nTotal pagado: $370.000 COP\n\nEste archivo es un comprobante de demostración.`;
  const url = URL.createObjectURL(new Blob([content], { type: "application/pdf" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `soporte-${reference}.pdf`;
  anchor.click();
  URL.revokeObjectURL(url);
}