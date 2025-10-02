// src/components/Media/index.js
import styles from './Media.module.css'

export default function Media() {
  return (
    <section id="media" className={styles.media}>
      <h2 className={styles.sectionTitle}>Media</h2>

      <div className={styles.videoGrid}>
        <div className={styles.subsection}>
          <h3>MedSMA℞T Overview</h3>
          <p>Help our friend the sheep make the correct choice for their medication storage, use, and disposal.</p>
          <div className={styles.videoContainer}>
            <iframe
              src="https://cdnapisec.kaltura.com/p/1660902/sp/166090200/embedIframeJs/uiconf_id/25717641/partner_id/1660902?iframeembed=true&playerId=kaltura_player&entry_id=1_5540tha5&flashvars[streamerType]=auto&flashvars[localizationCode]=en_US&flashvars[leadWithHTML5]=true&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[Kaltura.addCrossoriginToIframe]=true&wid=1_srdb8ez7"
              width="649"
              height="401"
              allowFullScreen
              allow="autoplay *; fullscreen *; encrypted-media *"
              frameBorder="0"
              title="MedSMA℞T Overview"
              className={styles.iframe}
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3>MedSMA℞T Choices</h3>
          <p>
            Our friend the sheep is presented with multiple options on medication use and safety throughout the game.
            Help sheep make the right choices.
          </p>
          <div className={styles.videoContainer}>
            <iframe
              src="https://cdnapisec.kaltura.com/p/1660902/sp/166090200/embedIframeJs/uiconf_id/25717641/partner_id/1660902?iframeembed=true&playerId=kaltura_player&entry_id=1_v0noidgm&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_US&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_njhh26xs"
              width="649"
              height="401"
              allowFullScreen
              allow="autoplay *; fullscreen *; encrypted-media *"
              frameBorder="0"
              title="MedSMA℞T Overview"
              className={styles.iframe}
            />
          </div>

        </div>

        <div className={styles.subsection}>
          <h3>A Quiet Sunday Afternoon</h3>
          <p>
            It is Sunday and sheep's friends are over to play basketball. Before they head to the basketball court,
            sheep's friends seem to notice some medicine that was left out on the kitchen counter. What should sheep
            do with the medication?
          </p>
          <div className={styles.videoContainer}>
            <iframe
              src="https://cdnapisec.kaltura.com/p/1660902/sp/166090200/embedIframeJs/uiconf_id/25717641/partner_id/1660902?iframeembed=true&playerId=kaltura_player&entry_id=1_v0noidgm&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_US&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_njhh26xs"
              width="649"
              height="401"
              allowFullScreen
              allow="autoplay *; fullscreen *; encrypted-media *"
              frameBorder="0"
              title="MedSMA℞T Overview"
              className={styles.iframe}
            />
          </div>
        </div>

        <div className={styles.subsection}>
          <h3>A Persuasive Speech at School</h3>
          <p>
            Our friend the sheep would like to sit with the team after school during the big game. However, sheep
            must first prepare for a speech and then give the presentation in front of the entire class. Help sheep
            get through the presentation in a safe and responsible way.
          </p>
          <div className={styles.videoContainer}>
            <iframe
              src="https://cdnapisec.kaltura.com/p/1660902/sp/166090200/embedIframeJs/uiconf_id/25717641/partner_id/1660902?iframeembed=true&playerId=kaltura_player&entry_id=1_472w7yaa&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_US&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_mrh55cem"
               width="649"
              height="401"
              allowFullScreen
              allow="autoplay *; fullscreen *; encrypted-media *"
              frameBorder="0"
              title="MedSMA℞T Overview"
              className={styles.iframe}
            />
          </div>
        </div>
      </div>

      <a href="#top" className={styles.topLink}>TOP↑</a>
    </section>
  )
}