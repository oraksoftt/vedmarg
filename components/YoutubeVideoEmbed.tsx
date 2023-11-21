import { YouTubeEmbed } from '@next/third-parties/google'

  
  const YoutubeVideoEmbed = (videoid: string,height:number =400) => {
	return (
		//<YouTubeEmbed videoid={videoid }"ogfYd705cRs" height={400} params="controls=0" />
		<YouTubeEmbed videoid={videoid } height={height} params="controls=0" />
	)
  }
  
  export default YoutubeVideoEmbed