---
sidebar: auto
---

# InNeed CCTV Camera Documentation

## Overview:

This document will guide you the proper installation process IPC webapp.


# Requirements:
  - Raspberry Pi
  - Internet Connection
  - Amazon Kinesis Video Streams
  - AWS SDK
  - Hls.Js video Player



## Webapp:
  ### Install dependencies:
  ```
  $ yarn install
  ```
 ## Run with at localhost:3000:
 ```
  $ yarn dev or
  $ npm run dev

```

## Build for production and launch server:
```
    $ yarn buld
    $ yarn start
```



## Generate static project:
```
$ yarn generate
```

## Raspberry Pi:

Pi Camera module is a camera which can be used to take pictures and high definition video. Raspberry Pi Board has CSI (Camera Serial Interface) interface to which we can attach PiCamera module directly. This Pi Camera module can attach to the Raspberry Pi's CSI port using 15-pin ribbon cable.


## Amazon Kinesis Video Streams:

Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), playback, and other processing. Kinesis Video Streams automatically provisions and elastically scales all the infrastructure needed to ingest streaming video data from millions of devices. It durably stores, encrypts, and indexes video data in your streams, and allows you to access your data through easy-to-use APIs. Kinesis Video Streams also supports WebRTC, an open-source project that enables real-time media streaming and interaction between web browsers, mobile applications, and connected devices via simple APIs. You can then install the Kinesis Video Streams SDK on your devices and start streaming media to AWS for playback, storage, and analytics.


## AWS SDK:

The AWS SDK for Java simpliﬁes use of AWS Services by providing a set of libraries that are consistent and familiar for Java developers. It provides support for API lifecycle consideration such as credential management, retries, data marshaling, and serialization.

## Hls.Js video Player: 

HLS. js is a JavaScript library that implements an HTTP Live Streaming client. It relies on HTML5 video and MediaSource Extensions for playback. It works by transmuxing MPEG-2 Transport Stream and AAC/MP3 streams into ISO BMFF (MP4) fragments.

