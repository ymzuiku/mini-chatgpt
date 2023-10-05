export function AnimateText({ texts }) {
  return (
    <div>
      {texts.map(({ title, info }) => {
        return (
          <>
            <strong>{title}</strong>
            <div>{info}</div>
          </>
        );
      })}
    </div>
  );
}
