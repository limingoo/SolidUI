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

package com.cloudorc.solidui.entrance.vo;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class JobElementPageVO {
    private Long projectId;
    private Page page;
    private Size size;
    private List<View> views;

    //JobElementPage name id
    @Data
    @Builder
    public static class Page {
        private String name;
        private Long id;


        // Getters and setters
    }
    //JobElementPage position
    @Data
    public static class Size {
        private double width;
        private double height;

    }
    //JobElementPage views
    @Data
    public static class View {
        private Long id;
        private String title;
        private Position position;
        private Size size;
        private String type;
        private String options;
        private Data data;

        // Getters and setters
        @lombok.Data
        public static class Position {
            private double top;
            private double left;

            // Getters and setters
        }
        @lombok.Data
        public static class Data {
            private Long dataSourceId;
            private Long dataSourceTypeId;
            private String sql;

        }

    }
}