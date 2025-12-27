'use client';

export function nextPage() {
    const params = new URLSearchParams(window.location.search);
    const pageNum = params.get("page") ? parseInt(params.get("page")!) : 1;
    const page = pageNum + 1;
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(params.toString());
    searchParams.set("page", page.toString());
    const newUrl = `${pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
}

export function previousPage() {
    const params = new URLSearchParams(window.location.search);
    const pageNum = params.get("page") ? parseInt(params.get("page")!) : 1;
    const page = pageNum > 1 ? pageNum - 1 : 1;
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(params.toString());
    searchParams.set("page", page.toString());
    const newUrl = `${pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
}