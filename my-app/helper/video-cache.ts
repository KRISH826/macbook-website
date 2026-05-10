// video-cache.ts

const videoCache = new Map<string, HTMLVideoElement>();

export const getVideo = async (src: string) => {
    if (videoCache.has(src)) {
        return videoCache.get(src)!;
    }

    const video = document.createElement("video");

    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.preload = "auto";

    await new Promise<void>((resolve) => {
        video.onloadeddata = () => resolve();
    });

    videoCache.set(src, video);

    return video;
};

export const pauseAllVideos = () => {
    videoCache.forEach((video) => {
        video.pause();
    });
};