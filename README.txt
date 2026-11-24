README for Supplementary Materials
==================================

Paper Title: "Bring Scripts to Acting! Content-Variant Control for Emotion-Aligned Acting Generation"

Anonymous ICLR 2027 submission (Paper under double-blind review)

Thank you for your thorough review!

NOTE: This supplementary package contains NO PDF. The full paper, including the
appendix, is submitted separately as the main paper PDF. Everything in this
package is a self-contained companion to that PDF: an interactive project page,
a video presentation, and the per-emotion acting clips shown on the page.

Acting turns narrative intent, emotion, character, and social relationships into
meaningful bodily behaviour. We introduce "Script-to-Acting", a unified framework
that interprets a raw script, applies fine-grained dramatic control, and generates
expressive acting under narrative, character, emotional, and physical constraints.
It consists of Acting Mind (structured script interpretation), Acting Morph
(transferable content-variant control), and Acting Creation (conditioned motion
synthesis). We address three challenges: scripts do not speak the language of
motion; emotion reshapes action although existing methods usually keep the action
fixed; and acting requires jointly aligning multiple interacting factors, for
which we release the TheaterAct dataset.

CONTENTS
--------
Total size: about 54 MB. Please unzip and keep the folder structure unchanged,
since project page.html references the media files by relative paths.

1. project page.html
   - The anonymous project homepage (open it in a web browser). Top to bottom:
       * Video Presentation  -- the full demo video (demo.mp4), embedded.
       * Teaser              -- Figure 1 of the paper (assets/pic/0_shoutu.jpg).
       * Method              -- Figure 2 of the paper, the framework pipeline
                                (assets/pic/pipline.jpg).
       * Acting across Emotion Axes -- six qualitative demo clips on the same
         Hamlet dialogue, ordered Anger, Fear, Disgust, Sadness, Joy, Neutral,
         illustrating content-variant acting as the emotion axis and its
         intensity vary.
       * Conclusion and Discussion -- the conclusion and discussion of the paper.
       * BibTeX              -- the citation entry.

2. demo.mp4
   - Full video presentation (about 4.9 minutes, 1920x1080).
   - Qualitative comparisons between our framework and caption-trained baselines,
     and content-variant acting as the intensity tau is swept along an emotion
     axis.

3. assets/
   - assets/Video/  : the six 1920x1080 per-axis clips embedded in the "Acting
     across Emotion Axes" section, each about 25-35 seconds
     (Anger.mp4, Fear.mp4, Disgust.mp4, Sadness.mp4, Joy.mp4, Neutral.mp4).
   - assets/pic/    : the still images used on the page, i.e. the teaser
     (0_shoutu.jpg) and the method pipeline (pipline.jpg); plus additional paper
     figures kept for reference (dataset.jpg, dingxing.jpeg).
   - assets/static/ : stylesheets, scripts and fonts required by the project page.

HOW TO VIEW
-----------
1. Unzip the package and keep all files in their original relative locations.
2. Open "project page.html" in a modern web browser (Chrome / Firefox / Edge /
   Safari). All videos and images load locally; no internet connection is needed.
3. Watch "demo.mp4" for the full video presentation, or play the six short clips
   in the "Acting across Emotion Axes" section of the page.

PROJECT HIGHLIGHTS
------------------
- Novel Paradigm: Script-to-Acting turns a raw script into expressive, physically
  plausible, contextually aligned acting, with continuous control over dramatic
  intensity instead of discrete emotion labels. The modules can be integrated into
  existing motion-generation models to enhance emotion-aligned generation and
  fine-grained control.
- Content-Variant Control: We identify this as the key capability that distinguishes
  acting from styled motion: as emotional intensity increases, the acting mode can
  change rather than remaining fixed. Acting Morph replaces a global style code with
  a token-wise acting-mode matrix, so intensity traverses distinct acting motifs
  instead of merely rescaling a fixed action.
- Generic Enhancement: The modules are drop-in and can be integrated with multiple
  motion-generation backbones (MDM, MLD, MoMask, MMM) to enhance emotion-aligned
  generation and fine-grained control.
- Richer Data: TheaterAct is the first multimodal dataset centered on
  script-dialogue-acting alignment and fine-grained dramatic emotions, providing
  7.2 hours of professional theatrical performance from 59 characters with
  script-level context and rich annotations (6 emotion axes with continuous
  intensity, 10 motivations). See the paper appendix for the full dataset
  statistics.

==================================
