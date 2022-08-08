export default function dateFormatter(date: string) {
    const baseDate = new Date(date)
    const options: any = { month: "long", day: "numeric" }
    return baseDate.toLocaleDateString("es-ES", options)
  }