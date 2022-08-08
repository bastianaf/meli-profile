function Error({ statusCode }: { statusCode: any }): any {
  return (
    <p>
      {statusCode
        ? `Ocurrió un error ${statusCode}en el servidor, por favor intenta nuevamente mas tarde`
        : "Ocurrió un error en el navegador, por favor intenta nuevamente mas tarde"}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: { res: any, err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
