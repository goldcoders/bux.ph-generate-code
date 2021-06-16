// TODO: Update Your Payload Scheme For API

import { Channels } from "./channels";

// TODO: channel enum
export interface bodyInterface {
    req_id: string
    client_id: string
    amount: number
    description: string
    expiry: number
    email: string
    contact: string
    name: string
    channel: Channels,
    notification_url: string
    redirect_url: string
    param1: string
    param2: string
  }
