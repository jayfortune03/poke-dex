export default function Loading({ widthLoad, heightLoad }) {
  return (
    <div className="flex">
      <div className="mx-auto">
        <lottie-player
          src="https://assets2.lottiefiles.com/temp/lf20_Tw0dyZ.json"
          background="transparent"
          speed="0.5"
          style={{ width: widthLoad, height: heightLoad }}
          loop
          autoplay
        />
      </div>
    </div>
  );
}
