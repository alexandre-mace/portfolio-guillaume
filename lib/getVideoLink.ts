import extractGoogleDriveId from "@/lib/extractGoogleDriveId";

const getVideoLink = (url: string): string => {
    if (url.includes('drive.google.com')) {
        return "https://drive.google.com/thumbnail?id=" + extractGoogleDriveId(url)
    }
    if (url.includes('dropbox')) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    }
    return url;
}

export default getVideoLink;