import { Link, useMatches } from "@remix-run/react";
import { Card } from '~/components';

const libraries: Library[] = [
  { name: 'Model 1', description: '', image_url: '', website: 'https://github.com/hacksur/model-one', tags: [] },
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
