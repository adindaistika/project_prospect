
export default function Subscription() {
    return (
        <main>
        </main>
    )
}
export async function getServerSideProps() {
    return {
      props: {title: 'SUBSCRIPTION'},
    };
  }