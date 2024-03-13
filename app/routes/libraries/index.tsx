import { Link, useMatches } from "@remix-run/react";
import { Card } from '~/components';

const libraries: Library[] = [
  { name: 'Model 1', description: '', image_url: '', website: 'https://github.com/hacksur/model-one', tags: [] },
  { name: 'Stellar Turrets SDK', description: '', image_url: '', website: 'https://github.com/hacksur/stellar-turrets-sdk', tags: [] },
]

export default function Index() {
  return (
    <>
      <div className="flex flex-col space-y-[20px] sm:space-y-0">
        {libraries.map((library: Library, key) => {
          return <Card data={library} key={key} />
        })}
      </div>
    </>
  );
}
