/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const productionVariable = [
    { name: "NODE_ENV", default: "production" },
    { name: "BASE_ENV", default: "" },
]
const developmentVariable = [
    { name: "NODE_ENV", default: "development" },
    { name: "BASE_ENV", default: "" },
    { name: "PROXY_SERVER", default: "http://localhost:12345" },
    { name: "SERVER_PORT", default: 3000 },
]

module.exports = {
    "production": productionVariable,
    "development": developmentVariable,
    filter(isDev = true, originEnvObj = {}) {
        const newObj = {}
        const dev = developmentVariable.map((v) => v.name)
        const prod = productionVariable.map((v) => v.name)
        Object.entries(originEnvObj).forEach(([key, value]) => {
            if (typeof value !== "string" && typeof value !== "number") return
            if ((isDev && dev.includes(key)) || (!isDev && prod.includes(key))) {
                newObj[key] = value;
            }
        })
        return newObj
    }
}