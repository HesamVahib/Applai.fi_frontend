export default function SearchHandler({ searchedKeyword, router, params } : { searchedKeyword: string, router: any, params: any }) {

    const currentParams = new URLSearchParams(params.toString());
    currentParams.set("title", searchedKeyword);
    router.push(`/?${currentParams.toString()}`);
}